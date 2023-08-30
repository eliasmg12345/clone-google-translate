import { Configuration, OpenAIApi, ChatCompletionsRequestMessageRoleEnum } from "openai"
import { type FromLanguage, type Language } from '../types.d'
import { SUPPORTED_LANGUAGES } from "../constants"

const apiKey = import.meta.env.VITE_OPENAI_API_KEY

const configuration = new Configuration({ apiKey })
const openai = new OpenAI(configuration)

export async function translate({
  fromLanguage,
  toLanguage,
  text
}: {
  fromLanguage: FromLanguage
  toLanguage: Language
  text: string
}) {
  const messages = [
    {
      role: ChatCompletionsRequestMessageRoleEnum.System,
      content: 'You are a AI trat translates'
    },
    {
      role: ChatCompletionsRequestMessageRoleEnum.User,
      content: 'Hola mundo {{Spanish}} [[English]]'
    },
    {
      role: ChatCompletionsRequestMessageRoleEnum.Assistant,
      content: 'Hello World'
    },
    {
      role: ChatCompletionsRequestMessageRoleEnum.User,
      content: 'How Are You? {{auto}} [[Deutsch]]'
    },
    {
      role: ChatCompletionsRequestMessageRoleEnum.User,
      content: 'Wie geht es dir'
    },
    {
      role: ChatCompletionsRequestMessageRoleEnum.User,
      content: 'Bon dia {{auto}} [[Español]]'
    },
    {
      role: ChatCompletionsRequestMessageRoleEnum.User,
      content: 'Buenos dias com estas'
    }
  ]

  const fromCode = fromLanguage === 'auto' ? 'auto' : SUPPORTED_LANGUAGES[fromLanguage]
}
