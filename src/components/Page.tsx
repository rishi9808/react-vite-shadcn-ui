import { Progress } from "./ui/progress";
import Logo from "@/assets/logo.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Page = () => {
  return (
    <div className="">
      <div className="w-[375px] h-[1618px] bg-[#F1F4F6]  ">
        <div className="flex flex-col justify-center items-center">
          {/* logo */}
          <img src={Logo} alt="" className="mb-7 mt-[44px]" />
          {/* progress bar */}
          <Progress value={20} className=" w-[335px] h-[8px] mb-[66px]" />
        </div>
        <div className="w-[343px] h-[988px] bg-white text-center flex flex-col items-center mx-auto rounded-[32px]">
          <h1 className=" pt-10 text-[24px] text-black font-medium">
            Build your server
          </h1>
          {/* tabs */}
          <div className="w-[319px] h-[176px]">
            <Tabs defaultValue="account" className="mt-9">
              <TabsList>
                <TabsTrigger value="erpNext">ERPNext</TabsTrigger>
                <TabsTrigger value="backend">Backend for App</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="password">
                Change your password here.
              </TabsContent>
            </Tabs>
            <Button className="w-[315px] h-[64px] rounded-[12px] bg-[#338AE9] text-white font-medium text-[16px] mt-5">
              Proceed
            </Button>
            <div className="border-t border-b border-[#E4E7EC] mt-6">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Travel Insurance Cover</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Terrorism Extension</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Emergency Medical Cover</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Travel Inconvenience Cover</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Covid-19 Cover</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Winter Sports Cover</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="w-[315px] h-[72px] text-center flex justify-center items-center
            ">
            <p className=" text-[#338AE9] font-medium text-2xl" >Policy wording</p>
            </div>
           

            </div>
            

            <Button
              variant="outline"
              className="w-[315px] h-[64px] rounded-[12px]  text-[#338AE9]  border-[#338AE9] border-[1px] font-medium text-[16px] mt-5"
            >
              Sign In
            </Button>
            <Button
              variant="outline"
              className="w-[315px] h-[64px] rounded-[12px]  text-[#338AE9]  border-[#338AE9] border-[1px] font-medium text-[16px] mt-5"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
