import showModal from './showModal';

const formatMessage = (formDataObj) => {
  return `
<b>Ф.И.О:</b> ${formDataObj.name},
<b>Email:</b> ${formDataObj.email},
<b>Телефон:</b> ${formDataObj.phone },
<b>Информация о ребёнке:</b> ${formDataObj.description},
<b>Вопрос:</b> ${formDataObj.question}
  `;
}

const sendToTelegram = async (formDataObj) => {
  const token = "6930827969:AAEOucfBbMVsexjePSeKItFYlO2eQ5TF-Dg";
  const chatId = "1366889505";
  const infomation = formatMessage(formDataObj);

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: infomation,
          parse_mode: "HTML",
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Ошибка отправки данных в Telegram");
    }

    showModal("Спасибо, скоро мы Вам перезвоним!");
  } catch (error) {
    console.error("Ошибка:", error);
    showModal("Что-то пошло не так, попробуйте позже.");
  }
};

export default sendToTelegram;
