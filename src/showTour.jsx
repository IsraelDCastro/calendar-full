import React from "react";
import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import { MosaicGallery } from "react-pretty-box";
import "react-pretty-box/dist/react-pretty-box.css";
import { Button, Card, CardBody, Chip, Input, Select, SelectItem } from "@nextui-org/react";
import { hotels } from "./components/placeholderInfo";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle, faCircleCheck, faShareAlt, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";

function ReviewsComp() {
  return (
    <>
      <script type="text/javascript" src="https://api.leadconnectorhq.com/js/reviews_widget.js" />
      <iframe
        src="https://services.leadconnectorhq.com/reputation/widgets/review_widget/h4hnbFVhHchYgJjAc2rH"
        title="Reviews from Go MarkeCLient"
        frameBorder="0"
        scrolling="no"
        style={{ minWidth: "100%", width: "100%" }}
        className="lc_reviews_widget h-[460px] w-full min-w-full md:h-[420px] lg:h-[400px] xl:h-[380px]"
        sandbox="allow-scripts allow-same-origin allow-popups"
      />
    </>
  );
}

export default function ShowTour() {
  const tourFormik = useFormik({
    initialValues: {
      startDate: "2024-11-25",
      endDate: "2024-11-30",
      full_name: "",
      email: "",
      phone_number: "",
      adults: 0,
      children: 0,
      pick_up_location: "Melia Caribe Beach"
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      console.log(values);
    }
  });
  const content = `
    <h4>Description</h2>
    <p>Join Us on an Unforgettable Four-Wheel Drive ATV Adventure!</p>
    <p>Rev up your engine and embark on an adrenaline-pumping journey through the stunning landscapes of Punta Cana. Our Adventure ATVs tour offers the perfect blend of thrill, culture, and natural beauty, taking you off the beaten path to explore the true essence of the Dominican Republic.</p>

    <h5>Tour Description</h3>
    <p>Explore Scenic Rural Roads: Kick off your adventure by navigating northern Punta Cana's rugged rural roads and trails. With the guidance of our expert tour guide, you'll steer through diverse terrains, feeling the rush of excitement as you conquer each twist and turn.</p>

    <p>Visit a Local Dominican Home: Our first stop is at a traditional Dominican home, where you'll immerse yourself in the local culture. Experience authentic Dominican hospitality as you sample fresh coffee, cocoa, and tobacco—local staples that define the rich flavors of this vibrant region. Don't miss the chance to try Mamajuana, the famous Dominican drink that's said to have stimulating properties.</p>

    <p>Relax at Macao Beach: The adventure concludes at the breathtaking Macao Beach, where the white sands and turquoise waters perfectly contrast the rugged ATV trails. Whether you dip in the ocean, relax on the sand, or simply soak in the stunning seascapes, Macao Beach is the ultimate spot to rugged ATV trails. Whether you dip in the ocean, relax on the sand, or simply soak in the stunning seascapes, Macao Beach is the ultimate spot to unwind after your thrilling ride.</p>

    <p>This ATV tour in Punta Cana is the perfect way to combine the thrill of adventure with the rich cultural experiences of the Dominican Republic. Whether you're splashing through mud on rural trails or unwinding on the pristine sands of Macao Beach, this tour promises a day of excitement and discovery. Book your Adventure ATVs experience today and get ready to conquer the trails of Punta Cana!</p>

    <p>The pickup for the tour is shared, meaning you'll travel with other visitors. Please note that there may be a time interval between pickups and the start of the tour to ensure all participants are ready to enjoy the experience to the fullest.</p>

    <p>Book Your ATV Adventure Today! <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.puntacanatransfer.com.do/tours-excursions/adventure-atvs">Puntacanatransfer</a></p>
  `;

  const categories = ["Boat", "Catamaran", "Beach", "Drinks", "Food", "Sun"];

  return (
    <>
      <header className="relative gap-6 bg-[url('https://picsum.photos/1280/720?random=1')] bg-cover bg-center bg-no-repeat px-10 py-12">
        <div className="absolute inset-0 bg-black/40 backdrop-blur" />
        <div className="container relative z-10 w-full text-white">
          <h1 className="mb-1">Saona Island Tour</h1>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-5">
            <div className="flex flex-wrap gap-2">
              {Array.isArray(categories) &&
                categories.map((category) => (
                  <Chip className="bg-white/30 text-white" variant="flat" size="sm" key={category}>
                    {category}
                  </Chip>
                ))}
            </div>
            <Button size="sm" className="bg-white/30 text-base text-white" variant="flat" isIconOnly>
              <FontAwesomeIcon icon={faShareAlt} />
            </Button>
          </div>
        </div>
        <div className="container relative z-10 flex w-8/12 flex-wrap place-content-center gap-6 text-white">
          <div className="flex-1">
            <MosaicGallery isRounded classNames={{ wrapper: "min-h-[400px]" }} />
          </div>
          {/* <ImageGallery isRounded /> */}
          <Card shadow="none" className="w-3/12">
            <CardBody className="gap-4">
              <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
              <ul className="mb-4 pl-2">
                <li>
                  <FontAwesomeIcon icon={faCheck} /> <span className="ml-2 inline-block">Lorem ipsum dolor sit amet.</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> <span className="ml-2 inline-block">Lorem ipsum dolor sit amet.</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} /> <span className="ml-2 inline-block">Lorem ipsum dolor sit amet.</span>
                </li>
              </ul>
              <a
                className="flex items-center justify-center gap-2 rounded-xl bg-danger-500 px-5 py-3 text-center text-sm text-white transition-all duration-250 ease-in-out hover:bg-danger-400"
                href="#check-available"
              >
                Check available! <FontAwesomeIcon icon={faCircleCheck} />
              </a>
              <Button color="success">
                Talk with supporter! <FontAwesomeIcon icon={faUser} />
              </Button>
            </CardBody>
          </Card>
        </div>
      </header>
      <div className="container py-12">
        <section className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <h3 className="mb-5">About the tour</h3>
            <EditorProvider
              content={content}
              editable={false}
              editorProps={{
                attributes: {
                  class: "tiptap-content tiptap-viewer"
                }
              }}
              extensions={[
                StarterKit,
                Link.configure({
                  openOnClick: true,
                  linkOnPaste: true
                })
              ]}
            />
            <h3 className="mb-5 mt-8">Tour tips</h3>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <Card shadow="none" className="bg-slate-50 text-center">
                <CardBody>
                  <h6 className="mb-2 font-semibold">Highlights</h6>
                  <ol className="list-decimal pl-5 text-sm">
                    <li> Buggies Adventure</li>
                    <li> Dominican typical house Experience</li>
                    <li> Cave and Cenote Exploration</li>
                    <li> Swim at the virgin Beach of Macao</li>
                    <li> Feel the adrenaline rush of a powerful buggy</li>
                  </ol>
                </CardBody>
              </Card>
              <Card shadow="none" className="bg-slate-50 text-center">
                <CardBody>
                  <h6 className="mb-2 font-semibold">Includes</h6>
                  <ul className="pl-0 text-sm">
                    <li>
                      <FontAwesomeIcon icon={faCheck} className="fa-fw text-green-500" /> Hotel pickup and drop-off
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheck} className="fa-fw text-green-500" /> Professional tour guides
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheck} className="fa-fw text-green-500" /> Visit to Macao Beach
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheck} className="fa-fw text-green-500" /> Visit to Dominican Ranch Plantation
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheck} className="fa-fw text-green-500" /> Visit to a natural blue water cenote
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheck} className="fa-fw text-green-500" /> Security equipment
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faTimes} className="fa-fw text-red-500" /> Bandanas
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faTimes} className="fa-fw text-red-500" /> Gratuities
                    </li>
                  </ul>
                </CardBody>
              </Card>
              <Card shadow="none" className="bg-slate-50 text-center">
                <CardBody>
                  <h6 className="mb-2 font-semibold">Not suitable for</h6>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Pregnant women</li>
                    <li>People with back problems</li>
                    <li>People with mobility impairments</li>
                    <li>People with heart problems</li>
                    <li>Drivers under 18 years</li>
                  </ul>
                </CardBody>
              </Card>
              <Card shadow="none" className="bg-slate-50 text-center">
                <CardBody>
                  <h6 className="mb-2 font-semibold">What to bring</h6>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Comfortable shoes</li>
                    <li>Swimwear</li>
                    <li>Towel</li>
                    <li> Credit card</li>
                  </ul>
                </CardBody>
              </Card>
            </div>
          </div>
          <aside id="check-available" className="relative col-span-12 scroll-mt-8 rounded-lg bg-slate-50 p-8 lg:col-span-4">
            <form id="check-available" className="sticky top-8 flex scroll-mt-8 scroll-pt-8 flex-col gap-5">
              <Input
                label="Full name"
                labelPlacement="outside"
                value={tourFormik.values.full_name}
                onChange={tourFormik.handleChange}
                id="name"
                name="name"
                placeholder="John Smith"
                color={tourFormik.touched.full_name && tourFormik.errors.full_name ? "danger" : ""}
                errorMessage={tourFormik.errors.full_name && tourFormik.touched.full_name && tourFormik.errors.full_name}
                isInvalid={tourFormik.errors.full_name && tourFormik.touched.full_name && tourFormik.errors.full_name}
              />
              <Input
                label="Your email"
                labelPlacement="outside"
                type="email"
                name="email"
                onChange={tourFormik.handleChange}
                value={tourFormik.values.email}
                id="email"
                placeholder="example@example.com"
                color={tourFormik.touched.email && tourFormik.errors.email ? "danger" : ""}
                errorMessage={tourFormik.errors.email && tourFormik.touched.email && tourFormik.errors.email}
                isInvalid={tourFormik.errors.email && tourFormik.touched.email && tourFormik.errors.email}
              />
              <Input
                label="Phone number"
                labelPlacement="outside"
                onChange={tourFormik.handleChange}
                name="phone_number"
                value={tourFormik.values.phone_number}
                type="tel"
                id="phone_number"
                placeholder="+1 000-000-0000"
                color={tourFormik.touched.phone_number && tourFormik.errors.phone_number ? "danger" : ""}
                errorMessage={tourFormik.errors.phone_number && tourFormik.touched.phone_number && tourFormik.errors.phone_number}
                isInvalid={tourFormik.errors.phone_number && tourFormik.touched.phone_number && tourFormik.errors.phone_number}
              />
              <Input
                label="Adults"
                labelPlacement="outside"
                type="number"
                value={tourFormik.values.adults}
                onChange={tourFormik.handleChange}
                id="adults"
                name="adults"
                placeholder="0"
                min={0}
                color={tourFormik.touched.adults && tourFormik.errors.adults ? "danger" : ""}
                errorMessage={tourFormik.errors.adults && tourFormik.touched.adults && tourFormik.errors.adults}
                isInvalid={tourFormik.errors.adults && tourFormik.touched.adults && tourFormik.errors.adults}
              />
              <Input
                label="Children"
                labelPlacement="outside"
                type="number"
                value={tourFormik.values.children}
                onChange={tourFormik.handleChange}
                id="children"
                name="children"
                placeholder="0"
                min={0}
                color={tourFormik.touched.children && tourFormik.errors.children ? "danger" : ""}
                errorMessage={tourFormik.errors.children && tourFormik.touched.children && tourFormik.errors.children}
                isInvalid={tourFormik.errors.children && tourFormik.touched.children && tourFormik.errors.children}
              />
              <Select
                label="Pick up location (hotel)"
                labelPlacement="outside"
                placeholder="Select your hotel"
                name="pick_up_location"
                onChange={tourFormik.handleChange}
                value={[tourFormik.values.pick_up_location]}
                defaultSelectedKeys={[tourFormik.values.pick_up_location]}
                color={tourFormik.touched.pick_up_location && tourFormik.errors.pick_up_location ? "danger" : ""}
                errorMessage={
                  tourFormik.errors.pick_up_location && tourFormik.touched.pick_up_location && tourFormik.errors.pick_up_location
                }
                isInvalid={tourFormik.errors.pick_up_location && tourFormik.touched.pick_up_location && tourFormik.errors.pick_up_location}
              >
                {Array.isArray(hotels) &&
                  hotels[0] &&
                  hotels.map((hotel) => (
                    <SelectItem key={hotel} value={hotel}>
                      {hotel}
                    </SelectItem>
                  ))}
              </Select>
              <Button color="danger">
                Finish order! <FontAwesomeIcon icon={faCheckCircle} />
              </Button>
            </form>
          </aside>
        </section>
        <section className="my-8">
          <h3>Customer reviews</h3>
          <ReviewsComp />
        </section>
      </div>
    </>
  );
}
