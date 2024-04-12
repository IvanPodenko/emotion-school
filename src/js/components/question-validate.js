import { validateForms } from "../functions/validate-forms";

const rules = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 2,
        errorMessage: "Минимальное количество символов 2",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".input-email",
    mail: true,
    telError: "Введите корректный email",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните email!",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
  {
    ruleSelector: ".textarea-description",
    rules: [
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Минимальное количество символов 3",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните информацию о ребёнке!",
      },
    ],
  },
  {
    ruleSelector: ".input-question",
    rules: [
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Минимальное количество символов 3",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Напишите ваш вопрос!",
      },
    ],
  },
];

validateForms(".js-validate-form", rules);
