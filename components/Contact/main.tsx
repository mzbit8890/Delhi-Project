import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import { MainBox } from "./index.style";
import img1 from "@/assests/ContactImage.webp";
import Image from "next/image";
import { Poppins } from "next/font/google";
import HamburgerMenu from "../AppBar/Hamburger";
import img2 from "@/assests/HbIcon.png";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const FAQData = [
  {
    question: "How can I make a reservation?",
    answer:
      "You can make a reservation on our website by selecting your desired dates, room type, and completing the booking process. Alternatively, you can contact our customer support for assistance.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept a variety of payment methods, including credit cards, debit cards, and online payment platforms. Please check the payment options during the booking process.",
  },
  {
    question: "Is there a cancellation policy?",
    answer:
      "Yes, we have a cancellation policy. You can find detailed information on our cancellation policy on the booking page or contact our customer support for assistance.",
  },
  {
    question: "Are there any additional fees or taxes?",
    answer:
      "The total cost displayed during the booking process includes all applicable fees and taxes. There are no hidden charges. Please review the booking details carefully before confirming your reservation.",
  },
  {
    question: "What amenities are included with the booking?",
    answer:
      "Our hostel offers various amenities, including free Wi-Fi, bed linens, and basic toiletries. You can find a list of amenities on the room details page during the booking process.",
  },
  {
    question: "Is early check-in or late check-out available?",
    answer:
      "Early check-in and late check-out options may be available upon request and subject to availability. Please contact our customer support to inquire about these options.",
  },
];
export default function ContactPageComponent() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <HamburgerMenu />
      <MainBox>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              className={`${poppins.variable}`}
              sx={{
                textAlign: "left",
                ml: "-18rem",
                fontFamily: "var(--font-poppins)",
                mb: "1rem",
                color: "#382757",
              }}
            >
              Support
            </Typography>
            <Typography
              variant="h6"
              className={`${poppins.variable}`}
              sx={{
                width: "60%",
                fontFamily: "var(--font-poppins)",
                color: "#382757",
                fontWeight: 300,
              }}
            >
              Get in touch, we’d love to hear from you. Check out our FAQ pages
              for answers to the most common questions.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                mt: "1rem",
              }}
            >
              <Button
                className={`${poppins.variable}`}
                variant="outlined"
                sx={{
                  bgcolor: "#382757",
                  color: "#fff",
                  border: "1px solid #fff",
                  borderRadius: "1rem",
                  fontFamily: "var(--font-poppins)",
                  padding: "0.5rem 2rem 0.5rem 2rem",
                  fontWeight: 300,
                }}
                onClick={handleOpen}
              >
                Contact us
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle
                  className={`${poppins.variable}`}
                  sx={{ fontFamily: "var(--font-poppins)" }}
                >
                  Contact Us
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src={img2}
                        width={200}
                        height={100}
                        style={{
                          objectFit: "cover",
                          width: "10rem",
                          height: "10rem",
                        }}
                        alt="HBImage.png"
                      />
                      <Typography
                        className={`${poppins.variable}`}
                        sx={{ fontFamily: "var(--font-poppins)" }}
                        variant="h6"
                      >
                        Contact info
                      </Typography>
                      <Typography
                        className={`${poppins.variable}`}
                        sx={{
                          fontFamily: "var(--font-poppins)",
                          fontWeight: 300,
                          textAlign: "center",
                        }}
                        variant="body1"
                      >
                        For personalized assistance or to address specific
                        booking needs, please feel free to reach out to our
                        support specialists.
                      </Typography>
                      <Typography
                        className={`${poppins.variable}`}
                        sx={{ fontFamily: "var(--font-poppins)" }}
                        variant="h6"
                      >
                        <Link
                          href={`mailto:info@hostelbird.com`}
                          color="inherit"
                        >
                          info@hostelbird.com
                        </Link>
                      </Typography>
                      <Typography
                        className={`${poppins.variable}`}
                        sx={{ fontFamily: "var(--font-poppins)" }}
                        variant="h6"
                      >
                        <Link href={`tel:9541999611`} color="inherit">
                          9541999611
                        </Link>
                      </Typography>
                    </Box>
                  </DialogContentText>
                </DialogContent>
              </Dialog>
              <Button
                className={`${poppins.variable}`}
                variant="outlined"
                sx={{
                  bgcolor: "#fff",
                  border: "1px solid #382757",
                  fontFamily: "var(--font-poppins)",
                  color: "#382757",
                  borderRadius: "1rem",
                  ml: "2rem",
                  padding: "0.5rem 2rem 0.5rem 2rem",
                  fontWeight: 300,
                }}
              >
                Explore FAQs
              </Button>
            </Box>
          </Box>
          <Box>
            <Image
              src={img1}
              alt="ConatctImage.webp"
              style={{ width: "45rem", height: "25rem", objectFit: "cover" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mt: "5rem",
            mb: "5rem",
          }}
        >
          <Typography
            variant="h5"
            className={`${poppins.variable}`}
            sx={{ fontFamily: "var(--font-poppins)" }}
          >
            Helpful Shopper Support Articles
          </Typography>
          <Carousel sx={{ width: "60rem" }} animation="slide">
            {FAQData.map((faq, index) => (
              <Box key={index} style={{ display: "flex" }}>
                <Box sx={{ p: 4, textAlign: "center", flex: 1 }}>
                  <Typography
                    className={`${poppins.variable}`}
                    sx={{
                      fontFamily: "var(--font-poppins)",
                      fontWeight: 200,
                    }}
                    variant="h5"
                    mb={2}
                  >
                    {faq.question}
                  </Typography>
                  <Typography
                    className={`${poppins.variable}`}
                    sx={{ fontFamily: "var(--font-poppins)", fontWeight: 200 }}
                    variant="body1"
                  >
                    {faq.answer}
                  </Typography>
                </Box>

                {FAQData[index + 1] && (
                  <Box sx={{ p: 4, textAlign: "center", flex: 1 }}>
                    <Typography
                      className={`${poppins.variable}`}
                      variant="h5"
                      mb={2}
                      sx={{
                        fontFamily: "var(--font-poppins)",
                        fontWeight: 200,
                      }}
                    >
                      {FAQData[index + 1].question}
                    </Typography>
                    <Typography
                      className={`${poppins.variable}`}
                      sx={{
                        fontFamily: "var(--font-poppins)",
                        fontWeight: 200,
                      }}
                      variant="body1"
                    >
                      {FAQData[index + 1].answer}
                    </Typography>
                  </Box>
                )}
              </Box>
            ))}
          </Carousel>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "5rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(131, 51, 212, 0.05)",
                flex: 1,
                padding: 3,
                textAlign: "center",
              }}
            >
              <Typography
                className={`${poppins.variable}`}
                sx={{ fontFamily: "var(--font-poppins)", fontWeight: 200 }}
                variant="h6"
              >
                Sales
              </Typography>
              <Typography
                className={`${poppins.variable}`}
                sx={{
                  fontFamily: "var(--font-poppins)",
                  fontWeight: 200,
                  width: "60%",
                  textAlign: "center",
                }}
                variant="body1"
              >
                Talk with our sales team to learn how Sezzle helps you increase
                conversions.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(159, 244, 217)",
                flex: 1,
                padding: 3,
                textAlign: "center",
                ml: "5rem",
              }}
            >
              <Typography
                className={`${poppins.variable}`}
                sx={{ fontFamily: "var(--font-poppins)", fontWeight: 200 }}
                variant="h6"
              >
                Sales
              </Typography>
              <Typography
                className={`${poppins.variable}`}
                sx={{
                  fontFamily: "var(--font-poppins)",
                  fontWeight: 200,
                  width: "60%",
                  textAlign: "center",
                }}
                variant="body1"
              >
                Talk with our sales team to learn how Sezzle helps you increase
                conversions.
              </Typography>
            </Box>
          </Box>
        </Box>
      </MainBox>
    </>
  );
}
