"use client";
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { gearReviews } from '../data';

export default function GearReviewDetailPage() {
  const params = useParams();
  const gearId = params?.gearId;
  const gear = gearReviews.find(g => g.id === gearId);

  if (!gear) {
    return (
      <div className="bg-[#FEF8E7] min-h-[calc(100vh-136px)] py-12 px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#A13C20] mb-4">Gear Not Found</h1>
          <Link href="/gear-reviews" legacyBehavior>
            <a className="text-[#A13C20] hover:underline">&larr; Back to Reviews</a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FEF8E7] min-h-[calc(100vh-136px)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-6">
          <Link href="/gear-reviews" legacyBehavior>
            <a className="text-[#A13C20] hover:underline text-sm">&larr; Back to Reviews</a>
          </Link>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#A13C20]">{gear.name}</h1>
        <div className="prose prose-lg max-w-none text-gray-800">
          <p>{gear.content}</p>
        </div>
      </div>
    </div>
  );
}
