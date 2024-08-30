import { createContext, useState, useContext, ReactNode } from "react";
import axios from "axios";

interface Tour {
  id: number;
  location: string;
  country: string;
  continent: string;
  title: string;
  days: number;
  price: number;
  image: string;
  maxPeople: number;
  minAge: number;
  type: string;
  overview: string;
  latitude: number;
  longitude: number;
  updatedAt: string;
  createdAt: string;
  reviewsCount: number;
  toursCount: number;
}

export interface TourContextType {
  tours: Tour[];
  toursCount: number;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  fetchTours: () => Promise<void>;
}

export const TourContext = createContext<TourContextType | undefined>(undefined);

export const TourProvider = ({ children }: { children: ReactNode }) => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [toursCount, setToursCount] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const fetchTours = async () => {
    try {
      const response = await axios.get('http://localhost:3333/tours', {
        params: { search: searchQuery }
      });
      setTours(response.data.tours);
      setToursCount(response.data.toursCount);
    } catch (error) {
      console.error("Error fetching tours", error);
    }
  };

  return (
    <TourContext.Provider value={{ tours, toursCount, fetchTours, searchQuery, setSearchQuery }}>
      {children}
    </TourContext.Provider>
  );
};

export const useTourContext = () => {
  const context = useContext(TourContext);
  if (!context) {
    throw new Error('useTourContext must be used within a TourProvider');
  }
  return context;
};
