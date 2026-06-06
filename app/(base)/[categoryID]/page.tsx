type CategoryPageProps = {
  params: Promise<{categoryID: string}>
}

async function CategoryPage(
  { params }: CategoryPageProps
) {
  const data = await params;
  return (
    <div>
      Category ID: { data.categoryID }
    </div>
  );
}

export default CategoryPage;
