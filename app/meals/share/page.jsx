import { useFormState } from "react-dom";
import classes from "./page.module.css";
import MealsForm from "@/components/meals/MealsForm";
import { shareMeal } from "@/lib/actions";

export default function ShareMealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <MealsForm />
      </main>
    </>
  );
}
