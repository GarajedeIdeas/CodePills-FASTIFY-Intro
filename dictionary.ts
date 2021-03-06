import { Dictionary, Roles } from "./interface";

const notificationEstablisment = {
  paid: "Nuevo pedido",
  canceled: "El pedido ha sido cancelado",
};
const notificationRider = {
  delivered: "El restaurante ha preparado el pedido",
  canceled: "El pedido ha sido cancelado",
};
const notificationUser = {
  paid: "Hurrah! Has completado el pedido con exito π",
  accepted: "El restaurante estΓ‘ preparando tu vizzio π",
  ready: "Gracias por pedir vizzio te esperamos pronto π₯³",
  delivery: "Tu pedido ya estΓ‘ de camino π΅",
  delivered: "Tu pedido ha sido preparado π",
  canceled: "Lo sentimos, Tu pedido ha sido rechazado π",
};

export default (role: Roles): Dictionary => {
  switch(role) {
    case Roles.user:
      return notificationUser
    case Roles.establishment:
      return notificationEstablisment
    case Roles.rider:
      return notificationRider
    default:
      throw new Error(`Unknown Role ${role}`)
  }
}