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

export const componentToHex = c => {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

export const hexToRgb = hex => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    var rgb = {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    };
    var rbgString = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
    return rbgString;
  } else {
    return null;
  }
};
