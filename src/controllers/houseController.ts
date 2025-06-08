import { Request, Response } from "express";
import { houses } from "../data/houses";

export const getHouses = (req: Request, res: Response) => {
  try {
    const { name } = req.query;

    if (name !== undefined && typeof name !== "string") {
      return res
        .status(400)
        .json({ message: "'name' query parameter must be a string" });
    }

    if (typeof name === "string" && name.trim() === "") {
      return res
        .status(400)
        .json({ message: "'name' query parameter cannot be empty" });
    }

    let filteredHouses = houses;
    if (typeof name === "string") {
      filteredHouses = houses.filter((house) =>
        house.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    return res.status(200).json(filteredHouses);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
