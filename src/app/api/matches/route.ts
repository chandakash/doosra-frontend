import { NextResponse } from "next/server";

export async function GET() {
    const matches = [
      {
        id: 1,
        team1: { name: 'RCB', color: '#FF0000' },
        team2: { name: 'KKR', color: '#6B238E' },
        time: '6:00 Pm',
        date: 'Today'
      },
      {
        id: 2,
        team1: { name: 'DC', color: '#0044CC' },
        team2: { name: 'CSK', color: '#FFD700' },
        time: '6:00 Pm',
        date: 'Today'
      },
      {
        id: 3,
        team1: { name: 'GT', color: '#004D40' },
        team2: { name: 'PBKS', color: '#FF0000' },
        time: '6:00 Pm',
        date: 'Today'
      }
    ];
  
    return NextResponse.json(matches);
  }