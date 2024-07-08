import React from "react";
import { Separator } from "../ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const SKills = () => {
  return (
    <section className="w-full min-h-dvh flex flex-col //bg-secondary">
      <div className="h-fit flex flex-col justify-center items-center rounded-md p-6 gap-y-2">
        <p className="text-secondary-foreground">tech</p>
        <div className="text-primary-foreground bg-primary rounded-md font-semibold text-3xl sm:text-4xl md:text-5xl p-3 inline-flex">
          Skills
        </div>
      </div>
      <div className="w-full h-fit flex flex-col gap-y-4 p-8 sm:p-12 md:p-20">
        <Card className="//drop-shadow-md bg-secondary">
          <CardHeader>
            <CardTitle>
              <p>Programming Languages</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>JavaScript</div>
            <div>TypeScript</div>
            <div>Python</div>
            <div>Java</div>
            <div>C#</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <p>Front End Web Development</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>HTML</div>
            <div>CSS</div>
            <div>React</div>
            <div>Next.js</div>
            <div>Bootstrap</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <p>Back End Web Development</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>Node.js</div>
            <div>Express.js</div>
            <div>RESTful API</div>
            <div>GraphQL</div>
            <div>Socket.io</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <p>Database</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>MySQL</div>
            <div>MongoDB</div>
            <div>PostgreSQL</div>
            <div>SQLite</div>
            <div>Redis</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <p>Tools</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>Git</div>
            <div>GitHub</div>
            <div>VS Code</div>
            <div>Postman</div>
            <div>Insomnia</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <p>Cloud</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>Heroku</div>
            <div>Netlify</div>
            <div>Vercel</div>
            <div>AWS</div>
            <div>Google Cloud</div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
