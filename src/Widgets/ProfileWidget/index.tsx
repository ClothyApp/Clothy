import { ProfileMenu, User } from "@/components";

import React from "react";

type ProfileWidgetProps = {};

const ProfileWidget: React.FC<ProfileWidgetProps> = ({}) => {
  return (
    <section>
        <User />
        <ProfileMenu />
    </section>
  );
};

export default ProfileWidget;
