export const translate_month = month => {
  var result = month;

  switch (month) {
    case "Feb":
      result = "Fev";
      break;
    case "Apr":
      result = "Abr";
      break;
    case "May":
      result = "Mai";
      break;
    case "Aug":
      result = "Ago";
      break;
    case "Sep":
      result = "Set";
      break;
    case "Dec":
      result = "Dez";
      break;
  }

  return result;
};

export const translate_this_label = label => {
  var month = label.match(/Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Nov|Dec/g);

  if (!month) return label;

  var translation = translate_month(month[0]);
  return label.replace(month, translation, "g");
};
