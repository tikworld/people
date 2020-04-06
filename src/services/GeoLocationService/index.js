"use strict";

import {
  getAddressData,
  getAddressByCoordinatesData,
  createNewAddress,
  updateAddressData,
  deleteAddressData
} from "../../models/GeoLocationModel";

const getAddress = async ({ dbConnectionPool }) => {
  return await getAddressData({ dbConnectionPool });
};

const getAddressByCoordinates = async ({ personId, dbConnectionPool }) => {
  return await getAddressByCoordinatesData({ personId, dbConnectionPool });
};

const createAddress = async ({ personData, dbConnectionPool }) => {
  return await createNewAddress({ personData, dbConnectionPool });
};

const updateAddress = async ({ personData, dbConnectionPool }) => {
  return await updateAddressData({ personData, dbConnectionPool });
};

const deleteAddress = async ({ personId, dbConnectionPool }) => {
  return await deleteAddressData({ personId, dbConnectionPool });
};

module.exports = {
  getAddress,
  getAddressByCoordinates,
  createAddress,
  updateAddress,
  deleteAddress
};
