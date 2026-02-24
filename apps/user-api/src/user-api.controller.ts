import 'dotenv';
import { Controller, Get, Post, Res } from '@nestjs/common';
import { UserApiService } from './user-api.service';
import { GoogleGenAI } from '@google/genai';
import type { Response } from 'express';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GOOGLE_CLOUD_PROJECT = process.env.GOOGLE_CLOUD_PROJECT;
const GOOGLE_CLOUD_LOCATION = process.env.GOOGLE_CLOUD_LOCATION;

@Controller()
export class UserApiController {
  constructor(private readonly userApiService: UserApiService) {}

  @Post('/testAi')
  async root(@Res() res: Response) {
    const ai = new GoogleGenAI({ vertexai: false, apiKey: GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: 'why is the sky blue?',
    });
    console.debug(response.text);
  }
}
