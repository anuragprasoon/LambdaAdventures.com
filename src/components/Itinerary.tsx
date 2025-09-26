import React, { useState } from 'react';
import { MapPin, Clock, Mountain, ChevronDown, ChevronRight } from 'lucide-react';

const ItineraryComponent = () => {
  const [expandedDays, setExpandedDays] = useState(new Set([1])); // First day expanded by default

  // Sample itinerary data - replace with your actual data
  const itinerary = [
    { 
      day: 1, 
      title: 'Arrival in Kathmandu', 
      shortDescription: 'Airport transfer and trip briefing',
      fullDescription: 'Upon arrival at Tribhuvan International Airport, you will be greeted by our representative and transferred to your hotel in Kathmandu. After check-in and refreshments, there will be a comprehensive trip briefing where you will meet your guide and fellow trekkers. We will conduct an equipment check to ensure you have everything needed for the trek. Evening is free to explore the vibrant streets of Thamel.',
      altitude: '1,400m',
      duration: '3-4 hours',
      accommodation: 'Hotel',
      meals: 'Dinner',
      highlights: ['Airport pickup', 'Equipment check', 'Trip briefing', 'Welcome dinner']
    },
    { 
      day: 2, 
      title: 'Fly to Lukla, trek to Phakding', 
      shortDescription: 'Scenic mountain flight and first day of trekking',
      fullDescription: 'Early morning flight to Lukla (2,804m), one of the world\'s most thrilling airports. The 35-minute flight offers spectacular views of the Himalayas. Upon landing, we meet our porters and begin our trek. The trail descends towards the Dudh Koshi river and follows the river valley through pine forests and traditional Sherpa villages. We cross several suspension bridges and pass by colorful prayer flags.',
      altitude: '2,610m',
      duration: '3-4 hours trek',
      accommodation: 'Tea House',
      meals: 'Breakfast, Lunch, Dinner',
      highlights: ['Thrilling mountain flight', 'First suspension bridges', 'Sherpa villages', 'Prayer wheels']
    },
    { 
      day: 3, 
      title: 'Trek to Namche Bazaar', 
      shortDescription: 'Challenging climb to the Sherpa capital',
      fullDescription: 'After breakfast, we continue along the Dudh Koshi river, crossing it twice on exciting suspension bridges. The trail then begins a steep ascent to Namche Bazaar, the famous Sherpa capital and trading center. This is a challenging day with significant altitude gain. On clear days, you might catch your first glimpse of Mount Everest from the trail. Namche is a fascinating place with internet cafes, bakeries, and gear shops.',
      altitude: '3,440m',
      duration: '5-6 hours',
      accommodation: 'Tea House',
      meals: 'Breakfast, Lunch, Dinner',
      highlights: ['Steep climb to Namche', 'First Everest views', 'Sherpa capital', 'Modern amenities']
    },
    { 
      day: 4, 
      title: 'Acclimatization day in Namche', 
      shortDescription: 'Rest day with optional acclimatization hikes',
      fullDescription: 'Today is crucial for acclimatization. We have optional hikes to help your body adjust to the altitude. Popular options include hiking to the Everest View Hotel (3,962m) for spectacular mountain panoramas, or visiting Syangboche and the nearby villages. You can also explore Namche\'s Saturday market, visit the Sherpa Cultural Museum, or simply rest and enjoy the mountain atmosphere.',
      altitude: '3,440m',
      duration: 'Half day hikes',
      accommodation: 'Tea House',
      meals: 'Breakfast, Lunch, Dinner',
      highlights: ['Everest View Hotel', 'Sherpa museum', 'Saturday market', 'Mountain panoramas']
    },
    { 
      day: 5, 
      title: 'Trek to Tengboche', 
      shortDescription: 'Visit the famous monastery with mountain views',
      fullDescription: 'The trail contours around the ridge above Namche, offering spectacular views of Everest, Nuptse, Lhotse, Ama Dablam, and other peaks. We descend through beautiful rhododendron forests to the Dudh Koshi river, then climb steeply to Tengboche (3,867m). The famous Tengboche Monastery, rebuilt after the 1989 earthquake, offers incredible 360-degree mountain views and is the spiritual center of the Khumbu region.',
      altitude: '3,867m',
      duration: '5-6 hours',
      accommodation: 'Tea House',
      meals: 'Breakfast, Lunch, Dinner',
      highlights: ['Tengboche Monastery', 'Ama Dablam views', 'Rhododendron forests', 'Spiritual experience']
    },
    { 
      day: 6, 
      title: 'Trek to Dingboche', 
      shortDescription: 'Enter the alpine zone with stunning mountain views',
      fullDescription: 'We descend from Tengboche through beautiful forests, cross the Imja river, and begin a gradual climb to Dingboche. The landscape becomes more barren and alpine as we gain altitude. Dingboche is a summer settlement where locals graze their yaks. The village offers stunning views of Lhotse, Island Peak, and Ama Dablam. This is another important acclimatization stop.',
      altitude: '4,410m',
      duration: '5-6 hours',
      accommodation: 'Tea House',
      meals: 'Breakfast, Lunch, Dinner',
      highlights: ['Alpine landscape', 'Yak herding village', 'Lhotse views', 'Stone-walled fields']
    }
  ];

  const toggleDay = (dayNumber) => {
    const newExpandedDays = new Set(expandedDays);
    if (newExpandedDays.has(dayNumber)) {
      newExpandedDays.delete(dayNumber);
    } else {
      newExpandedDays.add(dayNumber);
    }
    setExpandedDays(newExpandedDays);
  };

  const expandAll = () => {
    setExpandedDays(new Set(itinerary.map(day => day.day)));
  };

  const collapseAll = () => {
    setExpandedDays(new Set());
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Complete Itinerary</h2>
        <p className="text-gray-600 mb-4">Day-by-day breakdown of your adventure</p>
        
        {/* Expand/Collapse Controls */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={expandAll}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Collapse All
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {itinerary.map((day, index) => {
          const isExpanded = expandedDays.has(day.day);
          
          return (
            <div key={index} className="relative">
              <div className="bg-gradient-to-r from-blue-50 via-blue-25 to-transparent rounded-xl border border-blue-100 overflow-hidden hover:shadow-md transition-all duration-300">
                {/* Collapsible Header */}
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-blue-100/50 transition-colors"
                  onClick={() => toggleDay(day.day)}
                >
                  <div className="flex items-center space-x-4">
                    {/* Day Number */}
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-white font-bold">{day.day}</span>
                    </div>
                    
                    {/* Title and Short Description */}
                    <div className="text-left">
                      <h4 className="text-lg font-bold text-gray-900">
                        {day.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{day.shortDescription}</p>
                    </div>
                  </div>

                  {/* Expand/Collapse Icon */}
                  <div className="flex items-center space-x-4">
                    {/* Quick Info */}
                    <div className="hidden sm:flex items-center space-x-3 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Mountain className="w-4 h-4 mr-1" />
                        {day.altitude}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {day.duration}
                      </span>
                    </div>
                    
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-200">
                    <div className="border-t border-blue-200 pt-6">
                      {/* Full Description */}
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {day.fullDescription}
                      </p>

                      {/* Details Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-white/80 rounded-lg p-4 border border-blue-100">
                          <div className="flex items-center space-x-2 mb-2">
                            <Mountain className="w-4 h-4 text-blue-600" />
                            <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">Altitude</span>
                          </div>
                          <div className="font-bold text-gray-800">{day.altitude}</div>
                        </div>
                        
                        <div className="bg-white/80 rounded-lg p-4 border border-blue-100">
                          <div className="flex items-center space-x-2 mb-2">
                            <Clock className="w-4 h-4 text-green-600" />
                            <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">Duration</span>
                          </div>
                          <div className="font-bold text-gray-800">{day.duration}</div>
                        </div>
                        
                        <div className="bg-white/80 rounded-lg p-4 border border-blue-100">
                          <div className="flex items-center space-x-2 mb-2">
                            <MapPin className="w-4 h-4 text-orange-600" />
                            <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">Stay</span>
                          </div>
                          <div className="font-bold text-gray-800">{day.accommodation}</div>
                        </div>
                        
                        <div className="bg-white/80 rounded-lg p-4 border border-blue-100">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                            <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">Meals</span>
                          </div>
                          <div className="font-bold text-gray-800">{day.meals}</div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-200">
                        <h5 className="font-semibold text-gray-800 mb-3">Day Highlights</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {day.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Connecting Line */}
              {index < itinerary.length - 1 && (
                <div className="flex justify-start pl-6">
                  <div className="w-0.5 h-4 bg-gradient-to-b from-blue-300 to-blue-500 ml-6"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary Footer */}
      <div className="mt-8 pt-6 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6">
        <div className="text-center">
          <h3 className="font-bold text-gray-900 mb-2">Total Trek Duration</h3>
          <p className="text-gray-600">
            <span className="font-semibold text-blue-600">{itinerary.length} days</span> of incredible adventure
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItineraryComponent;