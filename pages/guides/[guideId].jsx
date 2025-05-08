import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Placeholder data matching GuidesPage
const guidesData = [
  { id: 'hike-yosemite', title: 'Hiking Yosemite Valley Loop', description: 'A scenic loop trail...', content: 'Full guide content for Yosemite hike goes here...' },
  { id: 'camp-big-sur', title: 'Camping Guide to Big Sur', description: 'Tips for finding campsites...', content: 'Full guide content for Big Sur camping...' },
  { id: 'survival-basics', title: 'Basic Survival Skills', description: 'Essential skills...', content: 'Full guide content for survival skills...' },
  { id: 'gear-backpacking-101', title: 'Backpacking Gear Essentials', description: 'A beginner\'s guide...', content: 'Full guide content for backpacking gear...' },
];

function GuideDetailPage() {
  const router = useRouter();
  const { guideId } = router.query;

  const guide = guidesData.find(g => g.id === guideId);

  if (!guide) {
    return (
      <div className="bg-[#FEF8E7] min-h-[calc(100vh-136px)] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#A13C20]">Guide Not Found</h1>
          <p className="text-lg text-gray-700 mb-6">
            Sorry, we couldn't find the guide you were looking for.
          </p>
          <Link href="/guides" legacyBehavior>
            <a className="text-[#A13C20] hover:underline font-semibold">&larr; Back to Guides</a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FEF8E7] min-h-[calc(100vh-136px)] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        {/* Back Link */}
        <div className="mb-6">
          <Link href="/guides" legacyBehavior>
            <a className="text-[#A13C20] hover:underline text-sm">&larr; Back to Guides</a>
          </Link>
        </div>

        {/* Guide Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#A13C20]">
          {guide.title}
        </h1>

        {/* Placeholder for actual guide content structure */}
        <div className="prose prose-lg max-w-none text-gray-800">
          <p><em>(Full guide content will go here...)</em></p>
          <p>{guide.content}</p> 
          {/* Add sections for intro, gear, steps, safety etc. later */}
        </div>

      </div>
    </div>
  );
}

export default GuideDetailPage; 