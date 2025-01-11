import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
export default function Footer() {
  return (
    <footer className="bg-dswdlightestblue p-4 flex space-x-32 justify-center">
      <p className="flex align-middle">
        <EmailIcon className="mr-2" />
        bantaypantawid@email.com
      </p>
      <p>
        <PhoneIcon />
        +12 345 6789
      </p>
    </footer>
  );
}
