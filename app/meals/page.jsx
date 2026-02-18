import Link from "next/link";
import classes from "./page.module.css";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import MealsGrid from "@/components/meals/MealsGrid";
const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};
export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals,created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favourite recipe and cook it yourself</p>
        <p className={classes.cta}>
          <Link href={"/share"}>Share your recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
