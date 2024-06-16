export type SkincareItem = {
  id: string;
  name: string;
  description: string;
  image: string; // URL to image
  reviews: SkincareReview[];
};

export type SkincareReview = {
  id: string;
  rating: number;
  comment: string;
  reviewerName: string;
};

type SkincareItemMutation = {
  name: string;
  description: string;
  image: string;
};

const fakeSkincareItems: Record<string, SkincareItem> = {
  "1": {
    id: "1",
    name: "Hydrating Serum",
    description: "A deeply hydrating serum for all skin types.",
    image: "https://example.com/serum.jpg",
    reviews: [
      {
        id: "1",
        rating: 4.5,
        comment: "Great product, really helped my dry skin!",
        reviewerName: "Alice",
      },
      // Add more reviews as needed
    ],
  },
  "2": {
    id: "2",
    name: "Anti-Aging Cream",
    description: "Reduces fine lines and wrinkles effectively.",
    image: "https://example.com/cream.jpg",
    reviews: [
      {
        id: "1",
        rating: 5,
        comment: "Love this cream, my skin feels so smooth!",
        reviewerName: "Bob",
      },
      // Add more reviews as needed
    ],
  },
};

export async function getSkincareItems(): Promise<SkincareItem[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return Object.values(fakeSkincareItems);
}

export async function getSkincareItem(id: string): Promise<SkincareItem | null> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return fakeSkincareItems[id] || null;
}

export async function addSkincareItem(values: SkincareItemMutation): Promise<SkincareItem> {
  const id = (Object.keys(fakeSkincareItems).length + 1).toString();
  const newSkincareItem: SkincareItem = {
    id,
    ...values,
    reviews: [],
  };
  fakeSkincareItems[id] = newSkincareItem;
  return newSkincareItem;
}

export async function addReview(skincareItemId: string, review: SkincareReview): Promise<void> {
  const skincareItem = fakeSkincareItems[skincareItemId];
  if (!skincareItem) {
    throw new Error(`Skincare item with id ${skincareItemId} not found.`);
  }
  review.id = (skincareItem.reviews.length + 1).toString();
  skincareItem.reviews.push(review);
}
