
import { motion } from 'framer-motion';

const TrendingHeading = ({title, icon: Icon}) => {
  return (
  <div className="flex flex-col mt-8 mb-8 px-6 group">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center gap-4"
      >
        {/* Animated Icon Container */}
        <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20 text-primary 
                        group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/5">
          {Icon && <Icon className="text-3xl md:text-4xl" />}
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-base-content font-sans">
            {title}
          </h1>
          
          {/* Professional Underline Effect */}
          <div className="relative h-1.5 w-32 bg-base-300 mt-2 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute top-0 left-0 h-full bg-linear-to-r from-primary to-blue-400"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default TrendingHeading
