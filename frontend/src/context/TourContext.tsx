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
  typeQuery: string | null;
  dateQuery: string | null;
  guestsQuery: number | null;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setTypeQuery: React.Dispatch<React.SetStateAction<string | null>>;
  setDateQuery: React.Dispatch<React.SetStateAction<string | null>>;
  setGuestsQuery: React.Dispatch<React.SetStateAction<number | null>>;
  fetchTours: () => Promise<void>;
}

export const TourContext = createContext<TourContextType | undefined>(undefined);

export const TourProvider = ({ children }: { children: ReactNode }) => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [toursCount, setToursCount] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [typeQuery, setTypeQuery] = useState<string | null>(null);
  const [dateQuery, setDateQuery] = useState<string | null>(null);
  const [guestsQuery, setGuestsQuery] = useState<number | null>(null);

  const fetchTours = async () => {
    try {
      const response = await axios.get('http://localhost:3333/tours', {
        params: { 
          search: searchQuery,
          type: typeQuery,
          date: dateQuery,
          guests: guestsQuery,
        }
      });
      setTours(response.data.tours);
      setToursCount(response.data.toursCount);
    } catch (error) {
      console.error("Error fetching tours", error);
    }
  };

  return (
    <TourContext.Provider 
      value={{ 
        tours, 
        toursCount, 
        fetchTours, 
        searchQuery, 
        setSearchQuery,
        typeQuery,
        setTypeQuery,
        dateQuery,
        setDateQuery,
        guestsQuery,
        setGuestsQuery
      }}>
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
