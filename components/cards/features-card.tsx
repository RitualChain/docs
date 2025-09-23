"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile"

type Feature = {
    name: string;
    shortName: string;
    url: string;
    icon: string;
    description?: string;
    external: boolean;
}

type FeaturesCardProps = {
    title?: string;
    leftFeature: Feature[];
    rightFeature?: Feature[];
}

interface FeatureItem {
  icon?: React.ReactNode; // Or string for image paths, or specific icon component type
  title: string;
  description?: string;
  className?: string;
}

interface FeaturesGridCardProps {
  features: FeatureItem[];
  className?: string;
  gridClassName?: string;
}

const FeaturesGridCard: React.FC<FeaturesGridCardProps> = ({ features, className, gridClassName }) => {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
          gridClassName
        )}
      >
        {features.map((feature, index) => (
          <Card key={index} className={cn("flex flex-col", feature.className)}>
            <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-2">
              {feature.icon && (
                <div className="bg-primary/10 text-primary p-2 rounded-md">
                  {feature.icon}
                </div>
              )}
              <div className="flex-1">
                <CardTitle className="text-lg font-semibold">
                  {feature.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1 text-sm text-muted-foreground">
              {feature.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const FeaturesCard: React.FC<FeaturesCardProps> = ({ title, leftFeature, rightFeature }) => {
    const isMobile = useIsMobile()

    const leftFeatures = leftFeature.map((feature) => ({
        icon: <Icon icon={feature.icon} />,
        title: isMobile ? feature.shortName : feature.name,
        description: feature.description,
    }));

    const rightFeatures = rightFeature?.map((feature) => ({
        icon: <Icon icon={feature.icon} />,
        title: isMobile ? feature.shortName : feature.name,
        description: feature.description,
    }));

    return (
        <motion.div
            className="mt-16 border-t pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
            <FeaturesGridCard features={leftFeatures} />
            {rightFeatures && <FeaturesGridCard features={rightFeatures} />}
        </motion.div>
    );
}

export default FeaturesCard;