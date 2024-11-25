import React, { createContext, useContext, useEffect, useState } from "react";
import { useInitData, useLaunchParams } from "@telegram-apps/sdk-react";

interface TelegramContextType {
  launchParams: Record<string, any> | null;
  initData: Record<string, any> | null | undefined;
}

const TelegramContext = createContext<TelegramContextType | undefined>(undefined);

export const TelegramProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const launchParams = useLaunchParams();
  const initData = useInitData();

  const [state, setState] = useState<TelegramContextType>({
    launchParams: null,
    initData: null,
  });

  useEffect(() => {
    setState({ launchParams, initData });

    if (initData) {
      const payload = {
        auth_date: new Date(initData.authDate).toISOString(),
        chat_instance: initData.chatInstance,
        chat_type: initData.chatType,
        hash_value: initData.hash,
        allows_write_to_pm: initData.user?.allowsWriteToPm,
        first_name: initData.user?.firstName,
        user_id: initData.user?.id,
        language_code: initData.user?.languageCode,
        last_name: initData.user?.lastName || null,
        photo_url: initData.user?.photoUrl || null,
        username: initData.user?.username || null,
      };

      const apiUrl = import.meta.env.VITE_API_URL + "/register/";

      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Server Response:", data);

          // Сохраняем user_id и referral_code в localStorage
          if (data.user) {
            localStorage.setItem("user_id", data.user.user_id);
            localStorage.setItem("referral_code", data.user.referral_code);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [launchParams, initData]);

  return (
    <TelegramContext.Provider value={state}>
      {children}
    </TelegramContext.Provider>
  );
};

export const useTelegramContext = (): TelegramContextType => {
  const context = useContext(TelegramContext);
  if (!context) {
    throw new Error("useTelegramContext must be used within a TelegramProvider");
  }
  return context;
};
