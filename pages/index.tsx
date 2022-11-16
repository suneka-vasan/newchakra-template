import Meta from "../components/common/Meta"
import Header from "../components/common/Header"
import BannerSection from '../components/home/BannerSection'
import FlexSection from '../components/home/FlexSection'
import GridSection from '../components/home/GridSection'
import SimpleGridSection from '../components/home/SimpleGridSection'
import HStackSection from '../components/home/HStackSection'
import VStackSection from '../components/home/VStackSection'
import WrapSection from '../components/home/WrapSection'
import AccordionSection from '../components/home/AccordionSection'
import TabSection from '../components/home/TabSection'
import TableSection from '../components/home/TableSection'
import ListSection from '../components/home/ListSection'
import PopoverSection from '../components/home/PopoverSection'
import ModalSection from '../components/home/ModalSection'
import CardSection from '../components/home/CardSection'
import AlertSection from '../components/home/AlertSection'
import CheckBoxSection from '../components/home/CheckBoxSection'
import RadioSection from '../components/home/RadioSection'

export default function Home() {
  return (
    <>
      <Meta />
      <Header />
      <BannerSection />
      <FlexSection />
      <GridSection />
      <SimpleGridSection />
      <HStackSection />
      <VStackSection />
      <WrapSection />
      <AccordionSection />
      <TabSection />
      <TableSection />
      <ListSection />
      <PopoverSection />
      <ModalSection />
      <AlertSection />
      <CardSection />
      <CheckBoxSection />
      <RadioSection />
    </>
  )
}
