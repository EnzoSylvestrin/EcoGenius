import Swal from "sweetalert2";

export const FormatText = (text: string) => {
  return text.substring(0, 1).toUpperCase() + text.substring(1);
};

type AlertProps = {
  text: string;
  title: string;
  footer?: boolean;
};

export const MakeAlert = ({ title, text, footer = false }: AlertProps) => {
  Swal.fire({
    title: title,
    text: text,
    footer: footer
      ? "<p style='text-align: center;'>Obs: Esses dados são aproximados não trate como verdade absoluta!</p>"
      : "",
    cancelButtonText: "#00a34d",
    confirmButtonColor: "#00a34d",
  });
};
