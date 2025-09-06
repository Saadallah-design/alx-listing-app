export interface CardProps {
    title: string;            // Listing title
    city: string;             // City where the listing is located
    checkInType: "self" | "host" | "other"; // Type of check-in (self, host-assisted, or other)
    rescheduleType: "flexible" | "moderate" | "strict" | string; // Booking reschedule policy
    rating: number;           // Star rating (e.g., 4.9)
    price: number | string;   // Price per night or per stay
    image: string;            // URL or path to the listing image
  }


export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}