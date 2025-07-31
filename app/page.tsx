"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Target, Users, MessageCircle, Settings, ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function MovilnetPage() {
  const [activeQuadrant, setActiveQuadrant] = useState(0)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const quadrants = [
    {
      title: "Gobernanza y Dirección",
      icon: Target,
      color: "from-[#f05a5d] to-red-600",
      description:
        "Establece lineamientos claros para el diseño, evaluación y control de la estrategia, fortaleciendo los mecanismos de dirección y supervisión.",
    },
    {
      title: "Visión Compartida",
      icon: Users,
      color: "from-red-500 to-[#f05a5d]",
      description:
        "La alineación estratégica permite que toda la organización entienda hacia dónde se dirige, promoviendo una visión común.",
    },
    {
      title: "Liderazgo y Comunicación",
      icon: MessageCircle,
      color: "from-[#f05a5d] to-red-700",
      description:
        "El liderazgo comunica de forma clara el propósito, la estrategia y las prioridades corporativas, generando confianza.",
    },
    {
      title: "Estructura y Procesos",
      icon: Settings,
      color: "from-red-600 to-[#f05a5d]",
      description:
        "La estructura organizacional se articula con la estrategia, asegurando que los procesos estén diseñados para crear valor.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuadrant((prev) => (prev + 1) % 4)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-[#f05a5d] to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">Movilnet</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <span className="text-lg font-semibold text-gray-600">Desarrollado por</span>
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">JPL</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 bg-gradient-to-br from-[#f05a5d]/10 to-red-600/10" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Horizonte{" "}
              <span className="bg-gradient-to-r from-[#f05a5d] to-red-600 bg-clip-text text-transparent">
                Estratégico
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              Liderazgo que Conecta, Dirección que Transforma
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                En Movilnet, alcanzar la cima es seguir avanzando. Significa asumir, con mayor fuerza, la
                responsabilidad de transformar nuestra organización con visión de futuro, liderazgo consciente y
                acciones alineadas.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </section>

      {/* Model Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nuestro Modelo de{" "}
              <span className="bg-gradient-to-r from-[#f05a5d] to-red-600 bg-clip-text text-transparent">
                Dirección
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cuando el liderazgo se vive con propósito y la visión se comparte, el futuro deja de ser incierto para
              convertirse en destino.
            </p>
          </motion.div>

          {/* Interactive Quadrants */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {quadrants.map((quadrant, index) => {
              const Icon = quadrant.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="cursor-pointer"
                  onClick={() => setActiveQuadrant(index)}
                >
                  <Card
                    className={`h-full transition-all duration-300 ${
                      activeQuadrant === index ? "ring-4 ring-[#f05a5d]/50 shadow-2xl" : "hover:shadow-xl"
                    }`}
                  >
                    <CardContent className="p-8">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${quadrant.color} flex items-center justify-center mb-6`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{quadrant.title}</h3>

                      <p className="text-gray-600 leading-relaxed">{quadrant.description}</p>

                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: activeQuadrant === index ? "100%" : "0%" }}
                        className={`h-1 bg-gradient-to-r ${quadrant.color} mt-6 rounded-full`}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership Impact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Impacto del{" "}
              <span className="bg-gradient-to-r from-[#f05a5d] to-red-600 bg-clip-text text-transparent">
                Liderazgo Integrador
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Liderazgo Activo y Participativo",
                description: "Transformación del líder tradicional hacia un facilitador del cambio organizacional.",
                icon: "🚀",
              },
              {
                title: "Líderes Socialmente Responsables",
                description: "Incorporación de dimensión ética, social y humana en el liderazgo.",
                icon: "🌟",
              },
              {
                title: "Cultura Organizacional Colaborativa",
                description: "Fortalecimiento de una cultura que favorece la interacción entre equipos.",
                icon: "🤝",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#f05a5d] to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">¡Hacer de Movilnet la Empresa Líder!</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Es tiempo de caminar juntos con convicción y visión clara, porque el objetivo es uno solo: hacer de
              Movilnet la empresa líder del sector telecomunicaciones en Venezuela.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#f05a5d] to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <span className="text-xl font-bold">Movilnet</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Liderazgo que conecta, dirección que transforma. Construyendo el futuro de las telecomunicaciones en
                Venezuela.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+58 (212) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@movilnet.com.ve</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Caracas, Venezuela</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Desarrollado por</h3>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JPL</span>
                </div>
                <span className="text-gray-400">JPL Development</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Movilnet. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
