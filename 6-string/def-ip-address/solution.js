var defangIPaddr = function (address) {
  let newAddress = address.replaceAll(".", "[.]");

  return newAddress;
};
