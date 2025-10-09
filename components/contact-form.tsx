"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  correo: z.string().email("Correo electrónico inválido"),
  telefono: z.string().min(8, "Teléfono inválido"),
  tipoEvento: z.string().min(1, "Selecciona un tipo de evento"),
  numeroAsistentes: z.string().min(1, "Ingresa el número de asistentes"),
  fechaTentativa: z.string().min(1, "Selecciona una fecha"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      correo: "",
      telefono: "",
      tipoEvento: "",
      numeroAsistentes: "",
      fechaTentativa: "",
      mensaje: "",
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus("success")
        form.reset()
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("[v0] Contact form error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre completo *</FormLabel>
                <FormControl>
                  <Input placeholder="Tu nombre" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="correo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo electrónico *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="tu@correo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="telefono"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono *</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+56 9 1234 5678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tipoEvento"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de evento *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="matrimonio">Matrimonio</SelectItem>
                    <SelectItem value="cumpleanos">Cumpleaños</SelectItem>
                    <SelectItem value="corporativo">Evento Corporativo</SelectItem>
                    <SelectItem value="brunch">Brunch</SelectItem>
                    <SelectItem value="coctel">Cóctel</SelectItem>
                    <SelectItem value="lanzamiento">Lanzamiento de Producto</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="numeroAsistentes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número de asistentes *</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="50" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fechaTentativa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fecha tentativa *</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="mensaje"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje *</FormLabel>
              <FormControl>
                <Textarea placeholder="Cuéntanos más sobre tu evento..." className="min-h-32" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {submitStatus === "success" && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
            ¡Gracias por contactarnos! Te responderemos pronto.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800">
            Hubo un error al enviar el formulario. Por favor, intenta nuevamente.
          </div>
        )}

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full md:w-auto bg-brand-600 hover:bg-brand-700 rounded-xl"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Enviar consulta"
          )}
        </Button>
      </form>
    </Form>
  )
}
