'use server';

/**
 * @fileOverview Summarizes the Grison Club's three pillars (Education, Culture, Environment) using AI.
 *
 * - summarizeClubPillars - An async function that takes pillar descriptions and returns a concise summary.
 * - SummarizeClubPillarsInput - The input type for the summarizeClubPillars function.
 * - SummarizeClubPillarsOutput - The return type for the summarizeClubPillars function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeClubPillarsInputSchema = z.object({
  educationDescription: z
    .string()
    .describe('A detailed description of the Education pillar.'),
  cultureDescription: z
    .string()
    .describe('A detailed description of the Culture pillar.'),
  environmentDescription: z
    .string()
    .describe('A detailed description of the Environment pillar.'),
});
export type SummarizeClubPillarsInput = z.infer<
  typeof SummarizeClubPillarsInputSchema
>;

const SummarizeClubPillarsOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise summary of the Grison Club pillars: Education, Culture, and Environment.'
    ),
});
export type SummarizeClubPillarsOutput = z.infer<
  typeof SummarizeClubPillarsOutputSchema
>;

export async function summarizeClubPillars(
  input: SummarizeClubPillarsInput
): Promise<SummarizeClubPillarsOutput> {
  return summarizeClubPillarsFlow(input);
}

const summarizeClubPillarsPrompt = ai.definePrompt({
  name: 'summarizeClubPillarsPrompt',
  input: {schema: SummarizeClubPillarsInputSchema},
  output: {schema: SummarizeClubPillarsOutputSchema},
  prompt: `Vous êtes un assistant IA qui résume les informations sur les piliers du Grison Club.

  Résumez de manière concise les informations suivantes sur les piliers Éducation, Culture et Environnement.

  Éducation : {{{educationDescription}}}
  Culture : {{{cultureDescription}}}
  Environnement : {{{environmentDescription}}}

  Résumé : `,
});

const summarizeClubPillarsFlow = ai.defineFlow(
  {
    name: 'summarizeClubPillarsFlow',
    inputSchema: SummarizeClubPillarsInputSchema,
    outputSchema: SummarizeClubPillarsOutputSchema,
  },
  async input => {
    const {output} = await summarizeClubPillarsPrompt(input);
    return output!;
  }
);
