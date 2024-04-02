import React from "react";
import SectionTitle from "../sectionTitle";
import { motion } from "framer-motion";
type Props = {};
type Step = {
  id: number;
  title: string;
};
const servicesSteps: Step[] = [
  {
    id: 1,
    title: "Müşterilerimiz Mağazamıza Gelip Beğendikleri Parçaları Seçer.",
  },
  {
    id: 2,
    title:
      "Müşterilerimiz Evinden Ölçü alınır. Beğendiği Parçalarla Evin Uyumuna Bakılır.",
  },
  {
    id: 3,
    title:
      "Sipariş Verilir. Gelen Parçalar Atölyemizde İşlenir. Müşterilerimiz İstediği Şekilde Tasarlanır.",
  },
  {
    id: 4,
    title:
      "Atölyemizde işlenen Parçalar Müşterimizle uygun bir gün belirlenerek Asılır.",
  },
];
const Services = (props: Props) => {
  return (
    <div className="bg-primary z-40  text-textPrimary md:px-20 h-full px-6 py-5 pb-24 w-full">
      <SectionTitle title="Services" color="textPrimary" />

      <div className="md:grid hidden gap-14">
        {servicesSteps.map((step, index) => (
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            transition={{ duration: 0.3, delay: step.id * 0.6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            key={step.id}
            className="border-b-2  border-textPrimary w-3/5 
                pb-4 flex gap-2 items-center md:m-0 "
            style={{ marginLeft: step.id % 2 === 0 ? "auto" : "0" }}
          >
            <div
              className=" border-2  border-textPrimary flex items-center justify-center
              rounded-full min-w-[40px] min-h-[40px]"
            >
              <span className="text-lg font-semibold">{step.id}</span>
            </div>
            <p>{step.title}</p>
          </motion.div>
        ))}
      </div>
      <div className="md:hidden grid gap-14">
        {servicesSteps.map((step, index) => (
          <motion.div
            initial={{ opacity: 0, x: step.id % 2 === 0 ? 100 : -100 }}
            transition={{ duration: 0.3, delay: index * 0.6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            key={step.id}
            className="border-b-2  border-textPrimary w-full 
                pb-4 flex gap-5 flex-col items-center md:m-0 "
          >
            <div
              className=" border-2  border-textPrimary flex items-center justify-center
              rounded-full min-w-[40px] min-h-[40px]"
            >
              <span className="text-lg font-semibold">{step.id}</span>
            </div>
            <p className="text-center">{step.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
