---
sidebar_position: 1
---

# Introduction

Welcome to the shadcn-ui + Docusaurus integration example. This project demonstrates how to seamlessly integrate [shadcn-ui](https://ui.shadcn.com/) components within a [Docusaurus](https://docusaurus.io/) documentation site.

## What is this?

This is a collection of examples showing how to:
- Set up shadcn-ui in a Docusaurus project
- Use shadcn-ui components in MDX documentation
- Create reusable component examples
- Style and theme components to match your documentation

## Getting Started

Check out the [Components](/docs/components) section to see examples of shadcn-ui components in action. Each example demonstrates different aspects of the component library, from simple buttons to complex interactive UIs.

## Examples Include:

- Cookie Settings
- Account Creation
- Payment Forms
- Interactive Charts
- Chat Interface
- And more...

These examples showcase not just individual components, but also how they can be combined to create rich, interactive user interfaces.

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { EnvelopeClosedIcon } from "@radix-ui/react-icons"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

# Tutorial Intro

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.

<Button size="sm">Click me</Button>

<div className="container mx-auto py-10">
  <Card>
    <CardHeader className="space-y-1">
      <CardTitle className="text-2xl">Create an account</CardTitle>
      <CardDescription>
        Enter your email below to create your account
      </CardDescription>
    </CardHeader>
    <CardContent className="grid gap-4">
      <div className="grid grid-cols-2 gap-6">
        <Button variant="outline">
          <GitHubLogoIcon className="mr-2 h-4 w-4" />
          Github
        </Button>
        <Button variant="outline">
          <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
          Google
        </Button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full">Create account</Button>
    </CardFooter>
  </Card>
</div>