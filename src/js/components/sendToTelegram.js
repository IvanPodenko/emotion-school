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
  const botChatId = "1366889505"; // ID бота
  const forwardChatId = "-1002037285427"; // ID группы или лички, куда нужно переслать сообщение
  const infomation = formatMessage(formDataObj);

  try {
    // Отправляем сообщение боту
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: botChatId,
          text: infomation,
          parse_mode: "HTML",
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Ошибка отправки данных в Telegram");
    }

    // Получаем ID отправленного сообщения
    const messageData = await response.json();
    const messageId = messageData.result.message_id;

    // Пересылаем сообщение в группу или личку
    const forwardResponse = await fetch(
      `https://api.telegram.org/bot${token}/forwardMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: forwardChatId,
          from_chat_id: botChatId,
          message_id: messageId,
        }),
      }
    );

    if (!forwardResponse.ok) {
      throw new Error("Ошибка пересылки сообщения в Telegram");
    }

    showModal("Спасибо, скоро мы Вам перезвоним!");
  } catch (error) {
    console.error("Ошибка:", error);
    showModal("Что-то пошло не так, попробуйте позже.");
  }
};

export default sendToTelegram;

