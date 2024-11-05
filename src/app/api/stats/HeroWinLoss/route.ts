import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
    try {
      console.log('fetchHeroStats api');
      const response = await axios.get('https://analytics.deadlock-api.com/v2/hero-win-loss-stats');
      console.log('fetchHeroStats response api', response);
      return NextResponse.json(response.data);
    } catch (error) {
      console.error("Error fetching hero stats:", error);
  
      // Log more details if available
      if (axios.isAxiosError(error)) {
        console.error("Axios error response:", error.response?.data);
      } else {
        console.error("Unexpected error:", error);
      }
      
      return NextResponse.json({ message: 'Error fetching hero stats' }, { status: 500 });
    }
  }
  