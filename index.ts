import express from "express";
import cors from "cors";
const app = express();
import movies from "routes/movies";

app.use(cors());
app.use(express.json());

app.use("/api/movies", movies);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
