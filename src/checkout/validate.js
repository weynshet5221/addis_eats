export function validateCheckout(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (
    !/^(\+251|0)?9\d{8}$/.test(
      values.phone.replace(/\s/g, "")
    )
  ) {
    errors.phone =
      "Enter a valid Ethiopian phone number.";
  }

  if (!values.deliveryArea.trim()) {
    errors.deliveryArea =
      "Delivery area is required.";
  }

  return errors;
}