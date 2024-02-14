"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Dropdown from "./Dropdown"

const formSchema = z.object({
  search: z.string().min(2, {
    message: "search must be at least 2 characters.",
  }),
  category:z.string()
})

const formSchemaFilter = z.object({
    category:z.string()
  })
export function SearchbarFilter() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchemaFilter),
    defaultValues: {
      category:"All Categories"
    },
  })


  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
      <div className="flex flex-col gap-5 md:flex-row items-center">
      <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-full ">
                <FormControl>
                  <Dropdown
                    onChangeHandler={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Search for items" {...field} className="input-field"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
      </form>
    </Form>
  )
}


export default SearchbarFilter

export function Filter() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category:""
    },
  })


  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
      <div className="flex flex-col gap-5 md:flex-row items-center">
      <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Dropdown
                    onChangeHandler={field.onChange}
                    value={field.value}
                    cate="filter"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  )
}


