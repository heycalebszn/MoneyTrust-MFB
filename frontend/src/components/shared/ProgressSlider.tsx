type ProgressSliderProps = {
  currentStep: number;
  totalSteps: number;
};

const ProgressSlider = ({ currentStep, totalSteps }: ProgressSliderProps) => {
  return (
    <div className="mt-8">
      {/* Step Counter */}
      <div className="flex justify-center mb-2">
        <p className="text-sm text-gray-600">{currentStep}/{totalSteps}</p>
      </div>
      
      {/* Progress Bar with Circles */}
      <div className="relative">
        {/* Background Bar */}
        <div className="h-1 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-red-600 rounded-full transition-all duration-300"
            style={{ 
              width: `${(currentStep / totalSteps) * 100}%`,
              boxShadow: '0 0 8px rgba(239, 68, 68, 0.5)' 
            }}
          />
        </div>
        
        {/* Step Circles */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-[1px]">
          {[...Array(totalSteps)].map((_, index) => (
            <div 
              key={index}
              className={`w-4 h-4 rounded-full border-2 border-white shadow-md ${
                index < currentStep ? 'bg-red-600' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressSlider; 