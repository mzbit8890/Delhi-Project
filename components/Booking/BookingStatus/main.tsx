import { BookingSuccess } from "@/components/LottieAnimations/Booking/BookingSuccess";
import { BookingFailed } from "@/components/LottieAnimations/Booking/BookingFailed";
import { useSelector } from "react-redux";

export default function BookingStatus() {
  const BookingStatus = useSelector(
    (state: any) => state.bookingStatus.bookingStatus
  );
  return BookingStatus ? (
    <div>
      <BookingSuccess />;
    </div>
  ) : (
    <BookingFailed />
  );
}
