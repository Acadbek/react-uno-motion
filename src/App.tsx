import "./App.css";
import { Button } from "./components/Button";
import { motion } from "motion/react";
import { useToast } from "./components/toast/usetoast";

function App() {
  const toast = useToast();

  const showToasts = () => {
    toast.success("Muvaffaqiyatli bajarildi!", {
      title: "Success",
      description: "Operatsiya muvaffaqiyatli yakunlandi",
    });

    setTimeout(() => {
      toast.error("Xatolik yuz berdi!", {
        title: "Error",
        description: "Nimadir noto'g'ri ketdi",
      });
    }, 500);

    setTimeout(() => {
      toast.warning("Diqqat!", {
        title: "Warning",
        description: "Bu muhim xabar",
      });
    }, 1000);

    setTimeout(() => {
      toast.info("Ma'lumot", {
        title: "Info",
        description: "Yangi ma'lumot mavjud",
      });
    }, 1500);

    setTimeout(() => {
      toast("Oddiy xabar", {
        title: "Default Toast",
      });
    }, 2000);
  };

  return (
    <>
      <motion.div
        key="box"
        initial={{ opacity: 0, y: -20 }} // Boshlanganda
        animate={{ opacity: 1, y: 0 }} // Ko‘rinayotganda
        exit={{ opacity: 0, y: 20 }} // Yo‘qolayotganda
      >
        Salom dunyo
      </motion.div>
      <div className="flex flex-col h-screen items-center justify-center">
        <div className="flex items-center justify-center gap-[1px] h-[400px] border w-[700px]">
          <Button icon="i-tabler:align-box-top-left-filled">Click</Button>
          <Button icon="i-tabler:antenna">Click</Button>
          <Button variant="secondary">Click</Button>
          <Button variant="secondary" icon="i-tabler:antenna">
            Submit
          </Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline">Ghost</Button>
        </div>

        <div className="space-y-4">
          <Button onClick={showToasts}>
            Barcha toast turlarini ko'rsatish
          </Button>

          <div className="grid grid-cols-2 gap-4">
            <Button onClick={() => toast.success("Success!")}>Success</Button>
            <Button variant="secondary" onClick={() => toast.error("Error!")}>
              Error
            </Button>
            <Button onClick={() => toast.warning("Warning!")}>Warning</Button>
            <Button onClick={() => toast.info("Info!")}>Info</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
