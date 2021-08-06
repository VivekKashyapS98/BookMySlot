import { useRouter } from "next/router";
import EditSlot from "../../components/EditSlot";

export default function ID() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h3 className="text-2xl text-center font-semibold m-2 md:text-3xl md:m-5">
        Book a Slot
      </h3>
      <EditSlot id={id} router={router} />
    </>
  );
}
