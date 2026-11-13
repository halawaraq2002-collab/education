import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Quiz } from '../types';
import { useAuth } from '../context/AuthContext';
import { 
  X, 
  CheckCircle, 
  XCircle, 
  Award, 
  HelpCircle, 
  RotateCcw,
  Sparkles,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface QuizModalProps {
  quiz: Quiz;
  courseTitle: string;
  onClose: () => void;
  onCompleted?: (score: number) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  quiz,
  courseTitle,
  onClose,
  onCompleted,
}) => {
  const { saveQuizScore } = useAuth();
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scorePercentage, setScorePercentage] = useState(0);

  const handleSelectOption = (qIndex: number, optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [qIndex]: optionIndex,
    }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    quiz.questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctIndex) {
        correctCount++;
      }
    });

    const percent = Math.round((correctCount / quiz.questions.length) * 100);
    setScorePercentage(percent);
    setIsSubmitted(true);

    if (percent >= quiz.passingScore) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#176B45', '#C6A34A', '#E8F2EC'],
      });
    }

    saveQuizScore(quiz.courseId, percent);
    if (onCompleted) onCompleted(percent);
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setScorePercentage(0);
  };

  const allAnswered = quiz.questions.every((_, idx) => selectedAnswers[idx] !== undefined);
  const passed = scorePercentage >= quiz.passingScore;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#dbe6df] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#176B45] text-white p-5 flex items-center justify-between border-b-4 border-[#C6A34A]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-[#C6A34A]" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">{quiz.title}</h3>
              <p className="text-xs text-white/80">{courseTitle} — درجة النجاح: {quiz.passingScore}%</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Result Banner if submitted */}
          {isSubmitted && (
            <div
              className={`p-5 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
                passed
                  ? 'bg-[#E8F2EC] border-[#176B45] text-[#176B45]'
                  : 'bg-red-50 border-red-300 text-red-800'
              }`}
            >
              <div className="flex items-center gap-3">
                {passed ? (
                  <CheckCircle className="w-8 h-8 text-[#176B45] shrink-0" />
                ) : (
                  <XCircle className="w-8 h-8 text-red-600 shrink-0" />
                )}
                <div>
                  <h4 className="font-bold text-base">
                    {passed ? 'تهانينا! لقد اجتزت الاختبار بنجاح' : 'لم تحقق درجة النجاح المطلوبة'}
                  </h4>
                  <p className="text-xs mt-0.5 opacity-90">
                    {passed
                      ? 'تم تسجيل الدرجة في سجلك وإضافة نقاط الإنجاز.'
                      : 'يمكنك مراجعة الأخطاء أدناه والمحاولة مرة أخرى لرفع معدلك.'}
                  </p>
                </div>
              </div>

              <div className="text-center bg-white px-4 py-2 rounded-xl shadow-xs border border-current">
                <div className="text-2xl font-black">{scorePercentage}%</div>
                <div className="text-[11px] font-semibold uppercase">النتيجة النهائية</div>
              </div>
            </div>
          )}

          {/* Question List */}
          <div className="space-y-6">
            {quiz.questions.map((q, qIndex) => {
              const selected = selectedAnswers[qIndex];
              const isCorrect = selected === q.correctIndex;

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-xl border transition-all ${
                    isSubmitted
                      ? isCorrect
                        ? 'border-green-300 bg-green-50/40'
                        : 'border-red-300 bg-red-50/40'
                      : 'border-[#dbe6df] bg-[#FAF8F2]/40 hover:border-[#176B45]/40'
                  }`}
                >
                  <div className="flex items-start gap-2.5 mb-3.5">
                    <span className="w-6 h-6 rounded-full bg-[#176B45] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {qIndex + 1}
                    </span>
                    <h5 className="font-bold text-sm sm:text-base text-[#252B27] leading-relaxed">
                      {q.question}
                    </h5>
                  </div>

                  <div className="space-y-2 pr-8">
                    {q.options.map((opt, optIndex) => {
                      const isOptionSelected = selected === optIndex;
                      let optionStyle = 'border-gray-200 bg-white hover:border-[#176B45]/50';

                      if (isSubmitted) {
                        if (optIndex === q.correctIndex) {
                          optionStyle = 'border-green-600 bg-green-100 text-green-900 font-bold';
                        } else if (isOptionSelected) {
                          optionStyle = 'border-red-500 bg-red-100 text-red-900 line-through';
                        } else {
                          optionStyle = 'border-gray-200 opacity-60';
                        }
                      } else if (isOptionSelected) {
                        optionStyle = 'border-[#176B45] bg-[#E8F2EC] text-[#176B45] font-bold shadow-xs';
                      }

                      return (
                        <button
                          key={optIndex}
                          onClick={() => handleSelectOption(qIndex, optIndex)}
                          disabled={isSubmitted}
                          className={`w-full text-right p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer disabled:cursor-default ${optionStyle}`}
                        >
                          <span>{opt}</span>
                          {isSubmitted && optIndex === q.correctIndex && (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          )}
                          {isSubmitted && isOptionSelected && optIndex !== q.correctIndex && (
                            <XCircle className="w-4 h-4 text-red-600" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation after submit */}
                  {isSubmitted && (
                    <div className="mt-3.5 pr-8 text-xs bg-white p-3 rounded-lg border border-gray-200 text-gray-700 leading-relaxed flex items-start gap-2">
                      <HelpCircle className="w-4 h-4 text-[#C6A34A] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#176B45]">التفسير العلمي: </strong>
                        <span>{q.explanation}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#FAF8F2] px-6 py-4 border-t border-[#dbe6df] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#747C76]">
            {isSubmitted ? (
              <span>تم تقييم الإجابات تلقائياً</span>
            ) : (
              <span>
                تمت الإجابة على {Object.keys(selectedAnswers).length} من {quiz.questions.length} أسئلة
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {isSubmitted ? (
              <>
                <button
                  onClick={handleRetry}
                  className="px-4 py-2 rounded-lg border border-[#176B45] text-[#176B45] text-xs font-bold hover:bg-[#E8F2EC] flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>إعادة الاختبار</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-lg bg-[#176B45] text-white text-xs font-bold hover:bg-[#0f482e] cursor-pointer shadow-xs"
                >
                  إغلاق ومتابعة المسار
                </button>
              </>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!allAnswered}
                className="px-6 py-2.5 rounded-lg bg-[#176B45] text-white text-xs sm:text-sm font-bold hover:bg-[#0f482e] disabled:opacity-50 transition-all cursor-pointer shadow-md shadow-[#176B45]/20"
              >
                تسليم الإجابات للتصحيح
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
