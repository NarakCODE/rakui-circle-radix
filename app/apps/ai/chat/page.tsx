"use client"

import * as React from "react"
import {
  Add01Icon,
  Alert02Icon,
  ArrowUp02Icon,
  DashboardSquare01Icon,
  Download01Icon,
  MoreVerticalIcon,
  Settings02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SidebarPageShell } from "@/components/shared/sidebar-page-shell"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const prompts = [
  {
    icon: DashboardSquare01Icon,
    label: "Write documentation",
    prompt:
      "Write comprehensive documentation for this codebase, including setup instructions, API references, and usage examples.",
  },
  {
    icon: Settings02Icon,
    label: "Optimize performance",
    prompt:
      "Analyze the codebase for performance bottlenecks and suggest optimizations.",
  },
  {
    icon: Alert02Icon,
    label: "Find and fix bugs",
    prompt:
      "Scan through the codebase and identify 3 important bugs with clear fixes.",
  },
]

const models = [
  {
    value: "gpt-5",
    label: "GPT-5",
  },
  {
    value: "gpt-4o",
    label: "GPT-4o",
  },
  {
    value: "gpt-4",
    label: "GPT-4",
  },
  {
    value: "claude-3-5",
    label: "Claude 3.5",
  },
]

const initialMessages = [
  {
    id: "1",
    role: "assistant",
    content:
      "Hi, I can help you design dashboards, refactor components, review code, or generate documentation.",
  },
  {
    id: "2",
    role: "user",
    content:
      "Build a consistent shadcn UI chat page with prompt suggestions and model selector.",
  },
  {
    id: "3",
    role: "assistant",
    content:
      "Sure. I will keep the layout clean, use default shadcn components, and make the prompt composer reusable.",
  },
] as const

type ChatMessage = {
  id: string
  role: "user" | "assistant"
  content: string
}

function ChatMessageItem({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user"

  return (
    <div className={cn("flex gap-3", isUser ? "justify-end" : "justify-start")}>
      {!isUser ? (
        <Avatar>
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      ) : null}

      <div
        className={cn(
          "max-w-[80%] border px-4 py-3 text-sm",
          isUser ? "bg-primary text-primary-foreground" : "bg-card"
        )}
      >
        {message.content}
      </div>

      {isUser ? (
        <Avatar>
          <AvatarFallback>NA</AvatarFallback>
        </Avatar>
      ) : null}
    </div>
  )
}

function PromptComposer({
  value,
  model,
  onValueChange,
  onModelChange,
  onSubmit,
}: {
  value: string
  model: string
  onValueChange: (value: string) => void
  onModelChange: (value: string) => void
  onSubmit: () => void
}) {
  return (
    <Card>
      <CardContent className="p-3">
        <Textarea
          value={value}
          onChange={(event) => onValueChange(event.target.value)}
          placeholder="Ask anything..."
          className="min-h-24 resize-none border-0 p-0 shadow-none focus-visible:ring-0"
        />

        <div className="mt-3 flex items-center gap-2">
          <Button variant="outline" size="icon" aria-label="Attach file">
            <HugeiconsIcon
              icon={Add01Icon}
              size={16}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </Button>

          <Select value={model} onValueChange={onModelChange}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select model" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                {models.map((model) => (
                  <SelectItem key={model.value} value={model.value}>
                    {model.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button
            className="ml-auto"
            disabled={!value.trim()}
            onClick={onSubmit}
          >
            Send
            <HugeiconsIcon
              icon={ArrowUp02Icon}
              size={16}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function AppsAiChatPage() {
  const [inputValue, setInputValue] = React.useState("")
  const [selectedModel, setSelectedModel] = React.useState("gpt-5")
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    ...initialMessages,
  ])

  function handleSubmit() {
    const content = inputValue.trim()

    if (!content) return

    setMessages((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        role: "user",
        content,
      },
      {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Got it. I can help you implement this with clean shadcn UI structure and reusable components.",
      },
    ])

    setInputValue("")
  }

  return (
    <SidebarPageShell
      sectionLabel="App"
      title="AI Chat"
      description="Ask questions, draft content, and explore assistant prompts"
    >
      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <Card className="hidden lg:block">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <h2 className="font-semibold">Conversations</h2>
              <p className="text-sm text-muted-foreground">Recent chats</p>
            </div>

            <Button variant="outline" size="icon" aria-label="New chat">
              <HugeiconsIcon
                icon={Add01Icon}
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Button>
          </CardHeader>

          <CardContent className="space-y-2">
            {["Dashboard design", "Component refactor", "API documentation"].map(
              (chat, index) => (
                <Button
                  key={chat}
                  variant={index === 0 ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  {chat}
                </Button>
              )
            )}
          </CardContent>
        </Card>

        <Card className="min-h-[calc(100svh-14rem)]">
          <CardHeader className="flex flex-row items-center justify-between border-b">
            <div>
              <h2 className="font-semibold">Chat Assistant</h2>
              <p className="text-sm text-muted-foreground">
                Model:{" "}
                {models.find((item) => item.value === selectedModel)?.label}
              </p>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" aria-label="More actions">
                  <HugeiconsIcon
                    icon={MoreVerticalIcon}
                    size={16}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <HugeiconsIcon
                    icon={Download01Icon}
                    size={16}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  Export chat
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HugeiconsIcon
                    icon={Settings02Icon}
                    size={16}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  Chat settings
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>

          <CardContent className="flex min-h-[520px] flex-col gap-6 p-6">
            <div className="flex flex-1 flex-col gap-6">
              {messages.map((message) => (
                <ChatMessageItem key={message.id} message={message} />
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {prompts.map((prompt) => (
                  <Button
                    key={prompt.label}
                    variant="outline"
                    onClick={() => setInputValue(prompt.prompt)}
                  >
                    <HugeiconsIcon
                      icon={prompt.icon}
                      size={16}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                    {prompt.label}
                  </Button>
                ))}
              </div>

              <PromptComposer
                value={inputValue}
                model={selectedModel}
                onValueChange={setInputValue}
                onModelChange={setSelectedModel}
                onSubmit={handleSubmit}
              />
            </div>
          </CardContent>

          <CardFooter className="border-t text-xs text-muted-foreground">
            AI can make mistakes. Review generated code before applying it.
          </CardFooter>
        </Card>
      </div>
    </SidebarPageShell>
  )
}
