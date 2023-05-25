import { Router } from "express";
import {
  cancelPayment,
  captureOrder,
  createOrder,
  payedOrder,
  
} from "../controllers/payment.controller.js";

const router = Router();

router.post("/create-order", createOrder); //Crea lo que tiene que cobrar
router.get("/capture-order", captureOrder); //Acepta el pago
router.get("/cancel-order", cancelPayment); //Si se arrepiente de comprar
router.get("/payed",  payedOrder)

export default router;
