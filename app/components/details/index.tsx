"use client";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { motion } from "motion/react";

export const Details = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 20, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
      className="mb-8 flex h-screen w-full flex-col rounded-3xl bg-secondary"
    >
      <div className="flex h-fit flex-col items-center justify-start gap-y-2 rounded-md p-6 sm:justify-center">
        <p className="text-muted-foreground">all you can find about</p>
        <div className="w-full border-b-4 border-primary sm:w-auto">
          <h1 className="font inline-flex p-3 text-3xl font-bold md:text-4xl">
            My Details
          </h1>
        </div>
      </div>
      <div className="mx-auto flex w-full items-center justify-center p-8 sm:p-12">
        {/* Samples */}
        <Tabs defaultValue="contact" className="w-auto md:w-1/2">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact</CardTitle>
                <CardDescription>Get in touch with me</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <div className="rounded-md bg-secondary px-4 py-2">
                    Bowornthat Chiangthong
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="gmail">Gmail</Label>
                  <div className="rounded-md bg-secondary px-4 py-2">
                    bowornthat.chth@gmail.com
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="gmail">Facebook</Label>
                  <Button
                    variant={"link"}
                    className="w-full justify-start rounded-md bg-secondary px-4 py-2"
                  >
                    Bowornthat Chiangthong
                  </Button>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="location">Location</Label>
                  <div className="rounded-md bg-secondary px-4 py-2">
                    Bangkok, Thailand
                  </div>
                </div>
              </CardContent>
              {/* <CardFooter>
                <Button>Save changes</Button>
              </CardFooter> */}
            </Card>
          </TabsContent>
          <TabsContent value="education">
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
                <CardDescription>Background information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="experience">
            <Card>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
                <CardDescription>Work history</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </motion.section>
  );
};
