export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          author_id: string | null
          content: string
          created_at: string
          excerpt: string | null
          featured_image: string | null
          id: string
          published: boolean
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          author_id?: string | null
          content: string
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          published?: boolean
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string | null
          content?: string
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          published?: boolean
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      leads: {
        Row: {
          address: string | null
          campaign_type: string | null
          city: string | null
          created_at: string
          email: string
          event_name: string | null
          first_name: string
          id: string
          last_name: string
          phone: string | null
          source: string | null
          state: string | null
          utm_campaign: string | null
          utm_medium: string | null
          utm_source: string | null
          zapier_synced: boolean | null
          zip_code: string | null
        }
        Insert: {
          address?: string | null
          campaign_type?: string | null
          city?: string | null
          created_at?: string
          email: string
          event_name?: string | null
          first_name: string
          id?: string
          last_name: string
          phone?: string | null
          source?: string | null
          state?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          zapier_synced?: boolean | null
          zip_code?: string | null
        }
        Update: {
          address?: string | null
          campaign_type?: string | null
          city?: string | null
          created_at?: string
          email?: string
          event_name?: string | null
          first_name?: string
          id?: string
          last_name?: string
          phone?: string | null
          source?: string | null
          state?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          zapier_synced?: boolean | null
          zip_code?: string | null
        }
        Relationships: []
      }
      mortgage_applications: {
        Row: {
          additional_info: string | null
          annual_income: string | null
          bankruptcy: string | null
          budget: string | null
          created_at: string
          credit_score: string | null
          credit_services: string | null
          down_payment: string | null
          email: string | null
          employment_status: string | null
          first_name: string | null
          first_time_buyer: string | null
          home_budget: string | null
          homebuying_journey: string | null
          id: string
          last_name: string | null
          loan_type: string | null
          location: string | null
          military_service: string[] | null
          phone: string | null
          purchase_timing: string | null
          real_estate_agent: string | null
          savings_amount: string | null
          timeline: string | null
          zip_code: string | null
        }
        Insert: {
          additional_info?: string | null
          annual_income?: string | null
          bankruptcy?: string | null
          budget?: string | null
          created_at?: string
          credit_score?: string | null
          credit_services?: string | null
          down_payment?: string | null
          email?: string | null
          employment_status?: string | null
          first_name?: string | null
          first_time_buyer?: string | null
          home_budget?: string | null
          homebuying_journey?: string | null
          id?: string
          last_name?: string | null
          loan_type?: string | null
          location?: string | null
          military_service?: string[] | null
          phone?: string | null
          purchase_timing?: string | null
          real_estate_agent?: string | null
          savings_amount?: string | null
          timeline?: string | null
          zip_code?: string | null
        }
        Update: {
          additional_info?: string | null
          annual_income?: string | null
          bankruptcy?: string | null
          budget?: string | null
          created_at?: string
          credit_score?: string | null
          credit_services?: string | null
          down_payment?: string | null
          email?: string | null
          employment_status?: string | null
          first_name?: string | null
          first_time_buyer?: string | null
          home_budget?: string | null
          homebuying_journey?: string | null
          id?: string
          last_name?: string | null
          loan_type?: string | null
          location?: string | null
          military_service?: string[] | null
          phone?: string | null
          purchase_timing?: string | null
          real_estate_agent?: string | null
          savings_amount?: string | null
          timeline?: string | null
          zip_code?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      webinar_registrations: {
        Row: {
          attended: boolean
          email: string
          first_name: string
          id: string
          last_name: string
          phone: string | null
          registered_at: string
          reminder_sent: boolean
          thank_you_sent: boolean
          webinar_date: string
        }
        Insert: {
          attended?: boolean
          email: string
          first_name: string
          id?: string
          last_name: string
          phone?: string | null
          registered_at?: string
          reminder_sent?: boolean
          thank_you_sent?: boolean
          webinar_date?: string
        }
        Update: {
          attended?: boolean
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          phone?: string | null
          registered_at?: string
          reminder_sent?: boolean
          thank_you_sent?: boolean
          webinar_date?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
