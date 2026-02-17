async function page({ params }) {
  const { mealId } = await params;
  return <div>{`meal id : ${mealId}`}</div>;
}

export default page;
